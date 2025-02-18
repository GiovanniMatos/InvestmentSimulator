

export default function ButtonSubmit({ 
        aporteInicial, 
        aporteMensal, 
        prazo, 
        selecionado, 
        taxaCDI }){
    
    const valorInicial = Number(aporteInicial);
    const valorMensal = Number(aporteMensal);
    const valorPrazo = Number(prazo);
    const valorTempoSelecionado = selecionado;
    const valorTaxaCDI = taxaCDI;

    return(
        <div>
            <button 
            type="button" 
            className="flex bg-orange-500
             hover:bg-orange-600 pl-4
             pt-2 pb-2 pr-4 rounded text-white 
             font-bold mt-2 mx-auto text-center">Calcular</button>

             <p>{}</p>
        </div>
    )
}
