import { useState } from "react"


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        onAdd({ text, day, reminder })
        
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form class='add-form'>
            <div className='form-control' onSubmit={onSubmit}>
                <label>Task</label>
                <input type='text' placeholder='add task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Day & time</label>
                <input type='text' placeholder='add day & time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked = {reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' 
            value='Save Task' 
            className='btn btn-block' />

        </form>
    )
}

export default AddTask