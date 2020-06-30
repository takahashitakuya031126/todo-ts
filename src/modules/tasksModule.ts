import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../Types'

type State = {
    count: number
    tasks: Task[]
}

const initialState: State = {
    count: 5,
    tasks: [
        {
            id: 5,
            title: 'カエルの楽園2020',
            done: false
        },{
            id: 4,
            title: 'ホワイトラビット',
            done: true
        },{
            id: 3,
            title: '女帝 小池百合子',
            done: false
        },{
            id: 2,
            title: '死という最後の未来',
            done: false
        },{
            id: 1,
            title: '本当の自由を手に入れる　お金の大学',
            done: true
        }
    ]
}

const tasksModule = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask (state: State, action: PayloadAction<string>) {
            state.count++

            const newTask: Task = {
                id: state.count,
                title: action.payload,
                done: false
            }

            state.tasks = [newTask, ...state.tasks]
        },
        doneTask (state: State, action: PayloadAction<Task>) {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.done = !task.done
            }
        },
        deleteTask (state: State, action: PayloadAction<Task>) {
            state.tasks = state.tasks.filter(t =>
                t.id !== action.payload.id
            )
        }
    }
})

export const {
    addTask, doneTask, deleteTask
} = tasksModule.actions

export default tasksModule