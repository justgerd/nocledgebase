import "./Inspector.scss"

export function Inspector(props) {
  const elem = props.data.find(x => x.name == props.selection) || {}
  return (
    <div class="inspector">
      <h3>{elem.name || <i>Details</i>} {<i>{elem.long || ""}</i>}</h3>
      <p>{elem.detail || ""}</p>
      <table>
        <tr>
          <td>Typ:</td>
          <td>{elem.type}</td>
        </tr>
        {
          <tr>
            <td>Übergeordnet:</td>
            <td><a href={`#/${elem.parent}`} onClick={e => {props.onSelection(elem.parent); e.stopPropagation();}}>{elem.parent}</a></td>
          </tr>
        }
        <tr>
          <td>Verantwortlich:</td>
          <td>{elem.responsible}</td>
        </tr>
        {
          Object.keys(elem.info || {}).map(e => (
            <tr>
              <td>{e}</td>
              <td>{elem.info[e]}</td>
            </tr>
          ))
        }
      </table>
      {
        elem.image ? <img src={elem.image}/> : <p>Kein Bild</p>
      }
    </div>
  )
}
