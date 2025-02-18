"use client";
import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit/ButtonSubmit";

export default function InvestPos() {
    const [aporteInicial, setAporteInicial] = useState("");
    const [aporteMensal, setAporteMensal] = useState("");
    const [prazo, setPrazo] = useState("");
    const [selectionado, setSelecionado] = useState("");
    const [taxaCDI, setTaxaCDI] = useState("");

    const options = [
        { label: "Meses", value: "mes(es)" },
        { label: "Anos", value: "ano(s)" }
    ];

    return (
        <div className="bg-indigo-300 text-zinc-950 text-lg pl-6 pt-6 pb-6">
            <form method="post">
                <label>Aporte Inicial</label><br />
                <input
                    type="number"
                    placeholder="1,00"
                    required
                    onChange={(e) => setAporteInicial(e.target.value)}
                /><br />

                <label>Aporte Mensal</label><br />
                <input
                    type="number"
                    placeholder="1,00"
                    required
                    onChange={(e) => setAporteMensal(e.target.value)}
                /><br />

                <label>Prazo</label><br />
                <div className="flex">
                    <input
                        type="number"
                        placeholder="1"
                        required
                        onChange={(e) => setPrazo(e.target.value)}
                    />
                </div>
                {options.map(option => (
                    <div key={option.value}>
                        <input
                            type="radio"
                            name="duration"
                            value={option.value}
                            checked={selectionado === option.value}
                            onChange={(e) => setSelecionado(e.target.value)} 
                        />
                        <label>{option.label}</label>
                    </div>
                ))}

                <label>Taxa do CDI</label><br />
                <input
                    type="number"
                    placeholder="ex: 100"
                    required
                    className="w-20"
                    onChange={(e) => setTaxaCDI(e.target.value)}
                />
                <label className="bg-lime-600 text-white p-1 rounded font-bold">%</label><br />

                <p>
                    Irei começar com <b>R$ {aporteInicial}</b><br />
                    Irei investir <b>R$ {aporteMensal}</b> mensalmente por <b>{prazo}</b> {selectionado} <br />
                    E meu investimento estará rendendo <b>{taxaCDI}% do CDI</b>
                </p>
                <ButtonSubmit
                 aporteInicial={aporteInicial} 
                 aporteMensal={aporteMensal}
                 prazo={prazo}
                 selecionado={selectionado}
                 taxaCDI={taxaCDI}
                 />

            </form>
        </div>
    );
}
