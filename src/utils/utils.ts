async function loader({ params }: any) {
  return fetch(`/api/${params.gameId}.json`);
}

export { loader };
