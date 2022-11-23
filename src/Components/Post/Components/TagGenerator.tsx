interface TagType {
  linkElement: string;
  linkAddress: string;
}
const TagGenerator = (props: TagType) => {
  return (
    <div className="yellowTagStyle animation">
      <a href={props.linkAddress} className="btn-tag-style animation">
        {props.linkElement}
      </a>
    </div>
  );
};

export default TagGenerator;
