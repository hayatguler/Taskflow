function TaskCard({
    task,
    onDeleteTask,
    onEditTask,
}) {
    function getPriorityLabel(priority) {
        if (priority === "high") {
            return "Yüksek"
        }

        if (priority === "medium") {
            return "Orta"
        }

        return "Düşük"
    }

    function getPriorityClass(priority) {
        if (priority === "high") {
            return "text-bg-danger"
        }

        if (priority === "medium") {
            return "text-bg-warning"
        }

        return "text-bg-success"
    }

    function getStatusLabel(status) {
        if (status === "completed") {
            return "Tamamlandı"
        }

        if (status === "in-progress") {
            return "Devam Ediyor"
        }

        return "Yapılacak"
    }

    function getStatusClass(status) {
        if (status === "completed") {
            return "text-bg-success"
        }

        if (status === "in-progress") {
            return "text-bg-primary"
        }

        return "text-bg-secondary"
    }

    function formatDate(dateValue) {
        if (!dateValue) {
            return "Tarih bilgisi yok"
        }

        const date = new Date(dateValue)

        if (Number.isNaN(date.getTime())) {
            return "Tarih bilgisi yok"
        }

        return date.toLocaleString("tr-TR", {
            dateStyle: "medium",
            timeStyle: "short",
        })
    }

    function handleDelete() {
        const shouldDelete = window.confirm(
            `"${task.title}" görevini silmek istediğinize emin misiniz?`
        )

        if (shouldDelete) {
            onDeleteTask(task.id)
        }
    }

    return (
        <article className="card border-0 shadow-sm rounded-4 mb-3">
            <div className="card-body p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3 mb-3">
                    <div>
                        <h3 className="h5 card-title mb-2">
                            {task.title}
                        </h3>

                        <p className="text-body-secondary mb-0">
                            Sorumlu:{" "}
                            <strong className="text-body">
                                {task.assignee || "Belirtilmedi"}
                            </strong>
                        </p>
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                        <span
                            className={`badge rounded-pill ${getPriorityClass(
                                task.priority
                            )}`}
                        >
                            {getPriorityLabel(task.priority)}
                        </span>

                        <span
                            className={`badge rounded-pill ${getStatusClass(
                                task.status
                            )}`}
                        >
                            {getStatusLabel(task.status)}
                        </span>
                    </div>
                </div>

                {task.description && (
                    <div className="bg-body-tertiary rounded-3 p-3 mb-3">
                        <p className="mb-0">
                            {task.description}
                        </p>
                    </div>
                )}

                <div className="row g-2 text-body-secondary small mb-3">
                    <div className="col-md-6">
                        <strong className="text-body">
                            Oluşturulma:
                        </strong>{" "}
                        {formatDate(task.createdAt)}
                    </div>

                    <div className="col-md-6">
                        <strong className="text-body">
                            Son güncelleme:
                        </strong>{" "}
                        {formatDate(task.updatedAt)}
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-end gap-2">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => onEditTask(task)}
                    >
                        Düzenle
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={handleDelete}
                    >
                        Sil
                    </button>
                </div>
            </div>
        </article>
    )
}

export default TaskCard