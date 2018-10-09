
import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} from 'graphql';
import { userInputType, userTypes ,loginInputType} from './UserType';
import UserModel from './UserSchema';
import jwt from 'jsonwebtoken';


export default {
	useradd: {
		type: userTypes,
				args: {
			
			firstName: {
				name: 'firstName',
				type: GraphQLString
			},
			lastName: {
				name: 'lastName',
				type: GraphQLString
			},
			email: {
				name: 'email',
				type: GraphQLString
			},
			telephone: {
				name: 'telephone',
				type: GraphQLInt
			},
			role: {
				name: 'role',
				type: GraphQLInt
			},
			password: {
				name: 'password',
				type: GraphQLString
			},

		},
		resolve: UserModel.adduser
	},

	removeUser: {

		type: userTypes,
		args: {
			id: {
				name: 'id',
				type: new GraphQLNonNull(GraphQLID)
			}
		},
		resolve: UserModel.removeUser
	},


	updateUser: {
		type: userTypes,
		args: {
			id: {
				name: 'ID',
				type: new GraphQLNonNull(GraphQLID)
			},
			firstName: {
				name: 'firstName',
				type: GraphQLString
			},
			lastName: {
				name: 'lastName',
				type: GraphQLString
			},
			email: {
				name: 'email',
				type: GraphQLString
			},
			telephone: {
				name: 'telephone',
				type: GraphQLInt
			},
			password: {
				name: 'password',
				type: GraphQLString
			},

		},
		resolve: UserModel.updateUser
	},


	Login: {
		type: userTypes,
		args: {
			telephone: {
				name: 'telephone',
				type: GraphQLInt
			},
			password:{
				name:"password",
				type:GraphQLString},
		},
		resolve(root, args) {
			return new Promise((resolve , reject)=>{
				UserModel.findOne({ telephone: args.telephone , password:args.password}).exec((err, res) => {
					//console.log(usr.password)
	
					if (err) {
						throw(err)
						console.log('error')
					}
					if (!res) {
						 new Error('res null');
						return false
	
					}
					else if(res.password !=	args.password){
						console.log('password incorrect');
						
					}
					  // Generate the jwt and add it to the user document being returned.
					  res.jwt = jwt.sign({ _id: res._id }, "super-secret");
					 
					  //return(res)
					  resolve(res)
	
	
				});
		
			})
			
		}
	}
};
