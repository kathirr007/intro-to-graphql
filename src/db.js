import mongoose from 'mongoose'
import options from './config'

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts })
}
