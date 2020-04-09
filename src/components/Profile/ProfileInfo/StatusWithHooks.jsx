import React, { useState } from 'react';
import { useEffect } from 'react';


const StatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  }
  const changeStatus = (e) => setStatus(e.currentTarget.value)


  return (
    <div>
      {!editMode &&
        <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
      }
      {editMode &&
        <input
          onChange={changeStatus}
          onBlur={deactivateEditMode}
          autoFocus={true}
          type="text"
          value={status} />
      }
    </div>
  )
}


export default StatusWithHooks;