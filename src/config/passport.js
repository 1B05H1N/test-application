import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import prisma from './db';
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,  // Ensure JWT_SECRET is set in your .env file
};

const strategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.error(error);
    return done(error, false);
  }
});

passport.use(strategy);

export default passport;
