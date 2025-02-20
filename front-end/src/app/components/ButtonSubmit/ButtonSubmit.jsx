"use client";
import { useState } from "react";

export default function ButtonSubmit({ 
    aporteInicial, 
    aporteMensal, 
    prazo, 
    selecionado, 
    taxaCDI 
}) {
    
    const valorInicial = Number(aporteInicial);
    const valorMensal = Number(aporteMensal);
    const valorPrazo = Number(prazo);
    const valorTempoSelecionado = selecionado;
    const valorTaxaCDI = Number(taxaCDI);

    const valorCDI = (valorTaxaCDI / 100) * 13.15;
    const taxaMensalCDB = (valorCDI / 12) / 100; 
    const meses = valorTempoSelecionado === "ano(s)" ? valorPrazo * 12 : valorPrazo; 

    function calculaJurosCompostos() {
        const resultados = [];
        let montanteInicial = valorInicial;

        for (let mes = 1; mes <= meses; mes++) {
            montanteInicial = montanteInicial * Math.pow((1 + taxaMensalCDB), 1);
            const montanteMensal = valorMensal * ((Math.pow((1 + taxaMensalCDB), mes) - 1) / taxaMensalCDB);
            const total = montanteInicial + montanteMensal;

            resultados.push({
                mes: mes,
                total: total.toFixed(2)
            });
        }

        return resultados;
    }

    const [resultados, setResultados] = useState([]);

    const handleClick = () => {
        const valoresMensais = calculaJurosCompostos();
        setResultados(valoresMensais);
    };

    return (
        <div>
            <button 
                type="button" 
                onClick={handleClick}
                className="flex 
                bg-orange-500 hover:bg-orange-600
                pl-4 pt-2 pb-2 pr-4 rounded text-white
                font-bold mt-2 mx-auto text-center">
                Calcular
            </button>

            <table className="min-w-full mt-4">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Mês</th>
                        <th className="border px-4 py-2">Total do mês (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {resultados.map((resultado) => (
                        <tr key={resultado.mes}>
                            <td className="border px-4 py-2">
                                {resultado.mes} {resultado.mes % 12 === 0 ? `(${resultado.mes / 12} ano${resultado.mes / 12 > 1 ? 's' : ''})` : ''}
                            </td>
                            <td className="border px-4 py-2">{resultado.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}
    ;