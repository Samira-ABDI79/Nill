interface TagType {
  linkElement: string;
  linkAddress: string;
}
const TagGenerator = (props: TagType) => {
  return (
    <div className="border-yellow border px-4 py-2 flex justify-center items-center">
      <a href={props.linkAddress} className="btn-tag-style animation">
        {props.linkElement}
      </a>
    </div>
  );
};

export default TagGenerator;
