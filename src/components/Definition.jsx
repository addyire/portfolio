const Definition = ({ word, type, definitions }) =>
  <div className="">
    <h1 className="text-6xl text-black font-extrabold">{word}</h1>
    <h2 className="text-sm text-gray-800">{type}</h2>
    <ul className="list-disc list-inside mx-8 my-4">
      {definitions.map(def => <li key={def}>{def}</li>)}
    </ul>
  </div>

export default Definition
