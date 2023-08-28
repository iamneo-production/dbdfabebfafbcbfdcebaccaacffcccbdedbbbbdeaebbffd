function getUserIpDetails(userResponse={}) {
    const { userName, userIp = '0.0.0.0' } = userResponse;
    return [userName, userIp]; 
}
function getTopThree(studentMarks=[]) {
    const [s1 = null, s2 = null, s3 = null, ...rest] = studentMarks;
    return [s1, s2, s3].sort();
}
export {getUserIpDetails, getTopThree}