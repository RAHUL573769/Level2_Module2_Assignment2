# Level2_Module2_Assignment2
This is a Basic Crud Operations in ExpressJs and TypeScript  

1.Basic Validation is done at First where userId(number and required),username(string,required and validator functions is used here to keep first letter Capital),password(string),fullname(type is string and trim is true),age(type is number),,email(type is string and is required),  

2. Again isActive (type is boolean),hobby(array of string) ,address is type Object,Orders(type object)
   
3.Mongodb is Used as a Database  

4.Joi validation is done

  How Does The Api Works:
userRouter.post('/', userController.createAUser);

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userId', userController.getSpecificUserByUserId);

userRouter.put('/:userId', userController.updateUserController);

userRouter.delete('/:userId', userController.userDeleteController);

userRouter.put('/:userId/orders', userController.userOrdersUpdateController);

userRouter.get('/:userId/orders', userController.userGetAllOrdersController);

userRouter.get(
  '/:userId/orders/total-price',
  userController.userGetOrdersTotalController,
);
Route Info:
Get Users:https://assignment-2-lake.vercel.app/api/users
Post Users:https://assignment-2-lake.vercel.app/api/users
Update USERS:https://assignment-2-lake.vercel.app/api/users/2
Delete Users:https://assignment-2-lake.vercel.app/api/users/6
