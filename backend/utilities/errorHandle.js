const express = require('express');

// middleware for error handle 

const errorHandler = (error,req,res,next) => {
    console.log(error.stack);
    res.status(500).json({message:'Something went wrong'});

};

module.exports = errorHandler;