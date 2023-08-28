export function getUserIpDetails(userResponse) {
    const { userName, userIp = '0.0.0.0' } = userResponse;
    return [userName, userIp]; 
}

export function getTopThree(studentMarks) {
    const [s1 = null, s2 = null, s3 = null, ...x] = studentMarks;
    return [s1, s2, s3].sort();
}