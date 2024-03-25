const Link = ({route}) => {
  return (
    <li className="mr-10 hover:bg-violet-300 px-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
