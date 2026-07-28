import TaskCard from "./TaskCard"

function TaskList({
    tasks,
    onDeleteTask,
    onEditTask,
}) {
    if (tasks.length === 0) {
        return (
            <section className="card border-0 shadow-sm rounded-4 text-center">
                <div className="card-body p-5">
                    <div className="display-3 mb-3">
                        📋
                    </div>

                    <h2 className="h4">
                        Görev bulunamadı
                    </h2>

                    <p className="text-body-secondary mb-0">
                        Henüz görev eklemediniz veya
                        seçtiğiniz filtrelere uygun görev
                        bulunmuyor.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h2 className="h4 mb-1">
                        Görevler
                    </h2>

                    <p className="text-body-secondary mb-0">
                        {tasks.length} görev gösteriliyor
                    </p>
                </div>
            </div>

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                />
            ))}
        </section>
    )
}

export default TaskList