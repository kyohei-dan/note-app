const Sidebar = ({
	notes,
	onAddNote,
	onDeleteNote,
	activeNote,
	setActiveNote,
}) => {
	const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

	return (
		<div className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>Note-App</h1>
				<button onClick={onAddNote}>Noteを作成</button>
			</div>
			<div className="app-sidebar-notes">
				{sortedNotes.map(({ id, title, body, lastModified }, index) => (
					<div
						className={`app-sidebar-note ${id === activeNote && "active"}`}
						onClick={() => setActiveNote(id)}
						key={index}
					>
						<div className="sidebar-note-title">
							<strong>{title}</strong>
							<button onClick={(e) => onDeleteNote(id)}>Delete</button>
						</div>

						<p>{body && body.substr(0, 100) + "..."}</p>
						<small className="note-meta">
							最終更新{" "}
							{new Date(lastModified).toLocaleDateString("ja-JP", {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</small>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
