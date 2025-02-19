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
        const montanteInicial = valorInicial * Math.pow((1 + taxaMensalCDB), meses);
        const montanteMensal = valorMensal * ((Math.pow((1 + taxaMensalCDB), meses) - 1) / taxaMensalCDB);
        
        return montanteInicial + montanteMensal;
    }

    const resultado = calculaJurosCompostos();

    return (
        <div>
            <button 
                type="button" 
                className="flex 
                bg-orange-500 hover:bg-orange-600
                 pl-4 pt-2 pb-2 pr-4 rounded text-white
                  font-bold mt-2 mx-auto text-center">
                Calcular
            </button>

            <p>Valor Futuro do Investimento: R$ {resultado.toFixed(2)}</p>
        </div>
    );
}