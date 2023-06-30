import axios from 'axios'

export const settingsData = [
  {
    title: 'Your Username',
    description: 'This is your profile username.',
    inputType: 'text',
    defaultValue: user?.username,
    inputPlaceholder: 'Username',
    disclaimer: 'Please use 32 characters at maximum.',
    userAttribute: 'username',
    user,
    onSave: (username: string) => {
      console.log(username)
      axios.patch(`http://localhost:4003/user/username/${id}`, { username })
    },
  },
  {
    title: 'Your Username',
    description: 'This is your profile username.',
    inputType: 'text',
    defaultValue: user?.username,
    inputPlaceholder: 'Username',
    disclaimer: 'Please use 32 characters at maximum.',
    userAttribute: 'username',
    user,
    onSave: (username: string) => {
      axios.patch(`http://localhost:4003/user/username/${id}`, username)
    },
  },
  {
    title: 'Your Username',
    description: 'This is your profile username.',
    inputType: 'text',
    defaultValue: user?.username,
    inputPlaceholder: 'Username',
    disclaimer: 'Please use 32 characters at maximum.',
    userAttribute: 'username',
    user,
    onSave: (username: string) => {
      axios.patch(`http://localhost:4003/user/username/${id}`, { username })
    },
  },
]
