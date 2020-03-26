module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let { enhancement } = item;

  if (enhancement === 20) {
    return {
      ...item
    };
  } else {
    enhancement = enhancement + 1;
    return {
      ...item,
      enhancement
    };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    };
  } else if (item.enhancement >= 15 && item.enhancement > 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };
  } else if (item.enhancement === 16) {
    return {
      ...item,
      durability: item.durability - 10
    };
  }
}

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

function get(item) {
  return {
    ...item
  };
}
