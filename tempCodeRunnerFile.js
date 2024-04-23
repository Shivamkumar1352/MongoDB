app.put('/users/:id', (req,res)=>{
    const userId = req.params.id;
    const updateData = {
        name: req.body.name,
        email: req.body.password,
        password: req.body.password
    };
    User.findByIdAndUpdate(userId, updateData, { new: true })
    .then (updatedUser => {
        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.json(updatedUser);
    })
    .catch(err=>res.status(400).json({message: err.message}));
});

app.delete('/users/:id',(req,res)=>{
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
    .then(deletedUser => {
        if(!deletedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.json({message: 'User deleted successfully'});
    })
    .catch(err=> res.status(400).json({message: err.message}));
});