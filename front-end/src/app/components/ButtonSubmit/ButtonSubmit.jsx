

export default function ButtonSubmit({ 
        aporteInicial, 
        aporteMensal, 
        prazo, 
        selecionado, 
        taxaCDI }){
    
    const valorInicial = Number(aporteInicial);
    const valorMensal = Number(aporteMensal) ;
    const valorPrazo = Number(prazo);
    const valorTempoSelecionado = selecionado;
    const valorTaxaCDI = Number(taxaCDI);

    const valorCDI = (valorTaxaCDI / 100) * 10.39;
    const taxaMensalCDB = (valorCDI / 12) / 100 ;
    const meses = valorPrazo * 12;
    const totalMensal = valorMensal * meses

    function calculaJurosCompostosAnos(){
        const montante = valorInicial + valorMensal * (1 + taxaMensalCDB) ** meses;
        return montante;
    }
    // function calculaJurosCompostosMeses(){
    //     return montante;
    // }

    let resultado = 0;
    
    switch (valorTempoSelecionado) {
        case "ano(s)":
            resultado = calculaJurosCompostosAnos();
            break;
        case "mes(es)":
            resultado = calculaJurosCompostosMeses();
            break;
        default:
            break;
    }

    return(
        <div>
            <button 
            type="button" 
            className="flex bg-orange-500
             hover:bg-orange-600 pl-4
             pt-2 pb-2 pr-4 rounded text-white 
             font-bold mt-2 mx-auto text-center">Calcular</button>

             <p>{resultado}</p>
             <p>{totalMensal}</p>
        </div>
    )
}
