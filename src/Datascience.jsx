import Card from "./Card"

function Datascience({data_3}) {
  return (
    <div className="container">
      <div className="row">

        <h2 className="course">Data Science</h2>

        {data_3.map((items,index)=> {return <Card items={items} key={index}/>})}

      </div>
    </div>
  )
}

export default Datascience