import './headers.scss';

function NextBasketButton(){

    return(
        <div className="option">
            <span>Próxima Cesta</span>
        </div>
    )
}

function SelectVariablesButton(){
    return (
    <div className="option">
        <span>Variáveis</span>
    </div>
    )
}


function NextBasketAndVariables(){
    return(
        <div className ="mainContainer">
                navbar
                <div className="navbarUnderlyingGap"></div>
                <div className="titleGap">
                    <div className="title">
                    <span>Variáveis</span>
                    </div>
                    <div className="variablesNavTabs">
                        <NextBasketButton/>
                        <SelectVariablesButton/>
                    </div>
                </div>
            </div>
    )
}

export default function CollapsableBit(){
    return(
        <div className="mainContainer">
            <NextBasketAndVariables/>
        </div>
    )
}