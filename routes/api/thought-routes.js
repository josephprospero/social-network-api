const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

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
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;