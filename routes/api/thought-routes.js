const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    addThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction

} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);


router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router;