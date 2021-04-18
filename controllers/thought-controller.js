const { User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req,res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
         })
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        });
      },

    // get one user by id
    getThoughtsById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // createThought
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => res.json(err));
    },

    // update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
        }
        res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err))
    },

    // create reaction
    createReaction({ body }, res) {
        Thought.create(body)
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => res.json(err));
    },

    // delete thought
    deleteReaction({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
        if (!dbThoughtsData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
        }
        res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err))
    },
};

module.exports = thoughtController;
