const { profile, user } = require('../../models');

exports.getProfile = async (req, res) => {
  try {
    // const idUser = req.user.id;

    let data = await profile.findOne({
      
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
      
      include: 
        {
            model: user,
            as: 'user',
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'status']
            }
        },
    });


    res.send({
      status: 'success...',
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.addProfile = async (req, res) => {
  try {
      const data = req.body

      await profile.create(data)

      res.send({
          status: 'success...',
          data
      })
  } catch (error) {
      console.log(error)
      res.send({
          status: 'failed',
          message: 'Server Error'
      })
  }
}
