const router = require("express").Router();
const pool = require("../dbConfig");
const Autoincrease = require("../middleware/autoincrease");

//----------------------add forum-------------------------

router.post("/add-forum", async (req, res) => {
	try {
		const {quest_name, quest_desc, points, general_title, general_message, general_win1, general_win2, empire_title, empire_message, empire_win1, empire_win2, federation_title, federation_message, federation_win1, federation_win2, union_title, union_message, union_win1, union_win2, conclusion_title, conclusion_message, conclusion_win1, conclusion_win2, empire_first_button, empire_second_button, federation_first_button, federation_second_button, union_first_button, union_second_button} = req.body;

		const newForum = await pool.query(
			// `BEGIN;
			// INSERT INTO internal_info (quest_name, quest_desc, points) VALUES ($1, $2, $3);
			// INSERT INTO general_story (general_title, general_message, general_win1, general_win2) VALUES ($1, $2, $3, $4);
			// INSERT INTO empire_story (empire_title, empire_message, empire_win1, empire_win2) VALUES ($1, $2, $3, $4);
			// INSERT INTO federation_story (federation_title, federation_message, federation_win1, federation_win2) VALUES ($1, $2, $3, $4);
			// INSERT INTO union_story (union_title, union_message, union_win1, union_win2) VALUES ($1, $2, $3, $4);
			// INSERT INTO conclusion_story (conclusion_title, conclusion_message, conclusion_win1, conclusion_win2) VALUES ($1, $2, $3, $4);
			// INSERT INTO empire_button (empire_first_button, empire_second_button) VALUES ($1, $2);
			// INSERT INTO federation_button (federation_first_button, federation_second_button) VALUES ($1, $2);
			// INSERT INTO union_button (union_first_button, union_second_button) VALUES ($1, $2);
			// COMMIT;
			// `
			`INSERT INTO story(quest_name, quest_desc, points, general_title, general_message, general_win1, general_win2, empire_title, empire_message, empire_win1, empire_win2, federation_title, federation_message, federation_win1, federation_win2, union_title, union_message, union_win1, union_win2, conclusion_title, conclusion_message, conclusion_win1, conclusion_win2, empire_first_button, empire_second_button, federation_first_button, federation_second_button, union_first_button, union_second_button) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)`,
			 [quest_name, quest_desc, points, general_title, general_message, general_win1, general_win2, empire_title, empire_message, empire_win1, empire_win2, federation_title, federation_message, federation_win1, federation_win2, union_title, union_message, union_win1, union_win2, conclusion_title, conclusion_message, conclusion_win1, conclusion_win2, empire_first_button, empire_second_button, federation_first_button, federation_second_button, union_first_button, union_second_button]
		);
		res.status(201).send({
			message: "Forum added successfully!",
			
		  });
		  console.log("Success");
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