import "./Inspector.scss"

export function Inspector(props) {
  const elem = props.data.find(x => x.name == props.selection) || {}
  const hasChildren = props.data.filter(e => e.parent === props.selection).length
  return (
    <div class={"inspector" + (hasChildren ? "" : " wide")}>
      <div class="info">
        <h3>{elem.name || <i>Details</i>} {<i>{elem.long || ""}</i>}</h3>
        <p>{elem.detail || ""}</p>
        <table>
          <tr>
            <td>Typ:</td>
            <td>{elem.type}</td>
          </tr>
          {
            elem.parent ?
              <tr>
                <td>Übergeordnet:</td>
                <td><a href={`#/${elem.parent}`}>{elem.parent}</a></td>
              </tr> : null
          }
          {
            // iterate over all fields for the table, but filter out fixed fields with special handling.
            Object.keys(elem || {}).filter(e => !(["name", "long", "type", "parent", "image", "detail"].includes(e))).map(e => (
              <tr>
                <td>{e}</td>
                <td>{elem[e]}</td>
              </tr>
            ))
          }
        </table>
      </div>
      {
        elem.image ? <img src={elem.image}/> : null
      }
    </div>
  )
}
