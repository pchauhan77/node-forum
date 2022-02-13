const router = require("express").Router();
const pool = require("../dbConfig");

//----------------------add forum-------------------------

router.post("/add-forum", async (req, res) => {
	try {
		const {q_name, q_desc, points, title, mymessage, win1, win2, first_button, second_button} = req.body;

		const newForum = await pool.query(
			`INSERT INTO forum(q_name, q_desc, points, title, mymessage, win1, win2, first_button, second_button) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
			[q_name, q_desc, points, title, mymessage, win1, win2, first_button, second_button]
		);
		res.status(201).send({
			message: "Forum added successfully!",
			body: {
			  product: {q_name, q_desc, points, title, mymessage, win1, win2, first_button, second_button}
			},
		  });
	} catch (err) {
		console.log(err.message);
	}
});

//---------------------get all todos-------------------------
router.get("/", async (req, res) => {
	try {
		const allTodo = await pool.query("SELECT * FROM todo");
		res.status(200).json(allTodo.rows);
	} catch (err) {
		console.log(err.message);
	}
});

//----------------------add new-------------------------

router.post("/add", async (req, res) => {
	try {
		const { description } = req.body;
		console.log(description);

		const newTodo = await pool.query(
			"INSERT INTO todo(description) VALUES($1) RETURNING *",
			[description]
		);
		res.status(200).json(newTodo.rows);
	} catch (err) {
		console.log(err.message);
	}
});

//--------------get a todo (id params)--------------------
router.get("/:id"),
	async (req, res) => {
		try {
			const { id } = req.params;
			const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
				id,
			]);
			res.status(200).json(todo.rows);
		} catch (err) {
			console.log(err.message);
		}
	};

//-----------------update/put-------------------------
router.put("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);
		res.status(200).json("Todo was updated");
	} catch (err) {
		console.log(err.message);
	}
});
//-----------------find todo and delete-------------------------
router.delete("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
			id,
		]);
		res.status(200).json("Todo was deleted");
	} catch (err) {
		console.log(err.message);
	}
});
module.exports = router;