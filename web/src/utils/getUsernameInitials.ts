const getUsernameInitials = (username: string) => {
  const nameParts = username.split(' ')
  let initials = ''

  if (nameParts.length > 1) {
    initials += nameParts[0].charAt(0).toUpperCase() // First name initial
    initials += nameParts[nameParts.length - 1][0].toUpperCase() // Last name initial
  } else if (nameParts.length === 1) {
    initials += nameParts[0].charAt(0).toUpperCase() // Single name initial
  }

  return initials
}

export default getUsernameInitials
