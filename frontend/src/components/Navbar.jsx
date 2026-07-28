function Navbar({ taskCount }) {
    return (
        <nav className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container py-2">
                <div className="d-flex align-items-center gap-3">
                    <span className="navbar-brand fw-bold mb-0">
                        📋 TaskFlow
                    </span>

                    <span className="text-white-50 small d-none d-sm-inline">
                        Görev yönetim paneli
                    </span>
                </div>

                <span className="badge rounded-pill text-bg-primary px-3 py-2">
                    {taskCount} görev
                </span>
            </div>
        </nav>
    )
}

export default Navbar