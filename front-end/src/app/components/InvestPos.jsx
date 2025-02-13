

export default function InvestPos(){
    return(
        <div>
            
            <label>Aporte Inicial</label>
            <input type="tel" placeholder="R$1,00" required></input><br/>

            <label>Aporte Mensal</label>
            <input type="tel" placeholder="R$1,00" required></input><br/>

            <label>Prazo</label>
            <input type="radio" value="Meses" />
            <input type="radio" value="Anos" />

            {/* adicionar CDI */}
        </div>
    )
}