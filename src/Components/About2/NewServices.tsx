interface ServicesType {
  title: string;
  text: string;
}
const NewServices = (props: ServicesType) => {
  return (
    <div className="service-body">
      <h5 className="head-service pb-3">{props.title}</h5>
      <p className="body-service">{props.text}</p>
    </div>
  );
};

export default NewServices;
