import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import TaskForm from "../components/TaskForm"
import TaskStats from "../components/TaskStats"
import TaskFilter from "../components/TaskFilter"
import TaskList from "../components/TaskList"

function HomePage() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

    try {
      return savedTasks ? JSON.parse(savedTasks) : []
    } catch {
      return []
    }
  })

  const [editingTask, setEditingTask] = useState(null)

  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("newest")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function addTask(newTask) {
    setTasks((currentTasks) => [
      newTask,
      ...currentTasks,
    ])
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== taskId
      )
    )

    if (editingTask?.id === taskId) {
      setEditingTask(null)
    }
  }

  function startEditing(task) {
    setEditingTask(task)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function cancelEditing() {
    setEditingTask(null)
  }

  function updateTask(updatedTask) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    )

    setEditingTask(null)
  }

  const normalizedSearchTerm =
    searchTerm.trim().toLowerCase()

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === "all" ||
      task.status === statusFilter

    const matchesPriority =
      priorityFilter === "all" ||
      task.priority === priorityFilter

    const matchesSearch =
      (task.title || "")
        .toLowerCase()
        .includes(normalizedSearchTerm) ||
      (task.assignee || "")
        .toLowerCase()
        .includes(normalizedSearchTerm)

    return (
      matchesStatus &&
      matchesPriority &&
      matchesSearch
    )
  })

  const sortedTasks = [...filteredTasks]

  if (sortOption === "newest") {
    sortedTasks.sort(
      (firstTask, secondTask) =>
        new Date(secondTask.createdAt) -
        new Date(firstTask.createdAt)
    )
  }

  if (sortOption === "oldest") {
    sortedTasks.sort(
      (firstTask, secondTask) =>
        new Date(firstTask.createdAt) -
        new Date(secondTask.createdAt)
    )
  }

  if (sortOption === "title-asc") {
    sortedTasks.sort((firstTask, secondTask) =>
      firstTask.title.localeCompare(
        secondTask.title,
        "tr"
      )
    )
  }

  if (sortOption === "title-desc") {
    sortedTasks.sort((firstTask, secondTask) =>
      secondTask.title.localeCompare(
        firstTask.title,
        "tr"
      )
    )
  }

  if (sortOption === "priority") {
    const priorityOrder = {
      high: 1,
      medium: 2,
      low: 3,
    }

    sortedTasks.sort(
      (firstTask, secondTask) =>
        priorityOrder[firstTask.priority] -
        priorityOrder[secondTask.priority]
    )
  }

  return (
    <div className="min-vh-100 bg-body-tertiary">
      <Navbar taskCount={tasks.length} />

      <main className="container py-4 py-lg-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <div className="sticky-form">
              <TaskForm
                onAddTask={addTask}
                onUpdateTask={updateTask}
                editingTask={editingTask}
                onCancelEditing={cancelEditing}
              />
            </div>
          </div>

          <div className="col-lg-8">
            <TaskStats tasks={tasks} />

            <TaskFilter
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
              priorityFilter={priorityFilter}
              onPriorityFilterChange={
                setPriorityFilter
              }
              searchTerm={searchTerm}
              onSearchTermChange={setSearchTerm}
              sortOption={sortOption}
              onSortOptionChange={setSortOption}
            />

            <TaskList
              tasks={sortedTasks}
              onDeleteTask={deleteTask}
              onEditTask={startEditing}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage