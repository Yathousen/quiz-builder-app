
// Generate up 56,800,235,584 unique keys
export const generateKey = (length) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

// Transforms Firestore Docs into Array
export const docsToArray = (docs) => {
    const result = [];
    if (!docs || docs.length <= 0) return result;
    docs.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
    return result;
  };
