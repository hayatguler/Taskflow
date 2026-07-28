function TaskStats({ tasks }) {
    const totalTaskCount = tasks.length

    const todoTaskCount = tasks.filter(
        (task) => task.status === "todo"
    ).length

    const inProgressTaskCount = tasks.filter(
        (task) => task.status === "in-progress"
    ).length

    const completedTaskCount = tasks.filter(
        (task) => task.status === "completed"
    ).length

    const statistics = [
        {
            label: "Toplam Görev",
            value: totalTaskCount,
            icon: "📋",
        },
        {
            label: "Yapılacak",
            value: todoTaskCount,
            icon: "🕒",
        },
        {
            label: "Devam Ediyor",
            value: inProgressTaskCount,
            icon: "⚡",
        },
        {
            label: "Tamamlandı",
            value: completedTaskCount,
            icon: "✅",
        },
    ]

    return (
        <section className="mb-4">
            <div className="mb-3">
                <h2 className="h4 mb-1">
                    Görev İstatistikleri
                </h2>

                <p className="text-body-secondary mb-0">
                    Görev durumlarının genel görünümü
                </p>
            </div>

            <div className="row g-3">
                {statistics.map((statistic) => (
                    <div
                        key={statistic.label}
                        className="col-6 col-xl-3"
                    >
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <span className="fs-4">
                                        {statistic.icon}
                                    </span>

                                </div>

                                <p className="text-body-secondary small mb-1">
                                    {statistic.label}
                                </p>

                                <p className="display-6 fw-bold mb-0">
                                    {statistic.value}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TaskStats
