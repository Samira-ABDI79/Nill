
interface IHeaderType {
  headertxt: string;
  theme: string;
}
const SectionHeader = (props:IHeaderType) => {
   if (props.theme === 'dark') {
    return (
        <div>
          <h6 className="header-section header-light">{props.headertxt}</h6>
        </div>
      );
   }
   else if(props.theme === 'yellow'){
    return (
      <div>
        <h6 className="header-section header-yellow">{props.headertxt}</h6>
      </div>
    );
   }
   else if(props.theme === 'blue'){
    return (
      <div>
        <h6 className="blue-header-section header-blue">{props.headertxt}</h6>
      </div>
    );
   }
   else {
    return (
      <div>
        <h6 className="header-section header-dark">{props.headertxt}</h6>
      </div>
    );
   }
};

export default SectionHeader;