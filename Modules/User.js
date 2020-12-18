const firebase= require('firebase/app');
require('firebase/auth')
const {db} = require('../firebase/admin')
const config = require('../firebase/config');
firebase.initializeApp(config)


// Signup
        exports.signup = (req,res) =>{
            db.collection('members')
            .add(req.body)
            .then(()=>{
                res.status(201).json({message : 'Signup Success'})
            })
            }
// LOGIn
        exports.login = (req,res) => {
            const user = {
                email : req.body.email,
                password : req.body.password
            }
            firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then((data)=>{
                return data.user.getIdToken();
            })
            .then(token =>{
                return res.json({token})
            })
            .catch((err)=>{
                res.status(500).json({err : 'ล้มเหลว'})
            })          
        }