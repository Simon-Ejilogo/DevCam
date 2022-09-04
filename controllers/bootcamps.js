const Bootcamp = require ('../models/Bootcamp');

// @desc  Get all bootcamps
// @route  Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'show all bootcamps'});  
}

// @desc  Get single bootcamp
// @route  Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'get a bootcamp'});  
}

// @desc  Create new bootcamp
// @route  Post /api/v1/bootcamps
// @access Private
exports.createBootcamp = async(req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true, 
        data: bootcamp
    });   
}

// @desc  Update a bootcamp
// @route  Update /api/v1/bootcamps/:id
// @access Private //
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});  
}

// @desc  Delete a bootcamp
// @route  Delete /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.id}`});  
}