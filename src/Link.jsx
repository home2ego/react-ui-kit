export default function Link(props) {
  const { href, target, children } = props;

  return (
    <a className="ui-link" href={href} target={target}>
      {children}
    </a>
  );
}
