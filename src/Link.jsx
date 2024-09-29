export default function Link(props) {
  const { href, target, children } = props;

  return (
    <a href={href} target={target} className="ui-link">
      {children}
    </a>
  );
}
