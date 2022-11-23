interface IButtonType {
    btntxt: string;
    btnType: 'simple' | 'export' | 'verify' | 'initialize' | 'render';
}

const Button = (props: IButtonType) => {
    if (props.btnType === 'simple') return <button className="button button--hyperion"><span><span>{props.btntxt}</span></span>
    </button>

    if (props.btnType === 'export') return <button className="button button--calypso"><span><span>{props.btntxt}</span></span>
    </button>

    if (props.btnType === 'initialize')
        return <button className="button button--anthe"><span><span>{props.btntxt}</span></span></button>

    if (props.btnType === 'render') return <button className="button button--mimas">
        <span><span>{props.btntxt}</span></span></button>


};

export default Button;