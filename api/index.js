export async function fetchXMLtoJSON(url) {
  const res = await fetch(url);
  const xmlText = await res.text();
  const parser = new window.DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

  return xmlDoc
}

export const login = async () => {
  try {
    const data = {
      host: window.location.host,
      ran: Math.random()
    }
    let params = new URLSearchParams(data).toString();
    // const api = '../ability/mock/getuserip.xml'
    const api = `/lib/common/getuserip.xml?${params}`;
    const text = await fetchXMLtoJSON(api);
    const school = text.querySelector('school');
    const online = text.querySelector('online');
    const ip_valid = text.querySelector('ip_valid');
    const ip_string = text.querySelector('ip_string');
    return {
      school: school ? school.textContent : '',
      ip_valid: ip_valid ? ip_valid.textContent === 'true' : false,
      online: online ? online.textContent === 'true' : false,
      ip_string: ip_string ? ip_string.textContent : ''
    }
  } catch (e) {
    // state.topicsList = [];
    return undefined
  }
}

export const logout = async () => {
  const href = window.location.href;
  window.open(`/lib/common/logout.html?returnURL=${href}`, '_self');
}

// 获取主题图片
export const getTopicImages = async (topic) => {
  try {
    const api = `../xml/onlinepic/topic_${topic}.xml`
    const res = await fetchXMLtoJSON(api);
    const items = Array.from(res.querySelectorAll('pics url'));
    // 取每个item下所有字段，自动转为JSON
    const list = items.map(item => {
      return item.textContent
    });
    return list
  } catch (e) {
    return [];
  }
}

const dealTopics = (xmlDoc) => {
  const items = Array.from(xmlDoc.querySelectorAll('topics item'));
  // 取每个item下所有字段，自动转为JSON
  return items.map(item => {
    const obj = {};
    Array.from(item.children).forEach(child => {
      obj[child.tagName] = child.textContent;
    });
    return obj;
  });
}
//  获取主题列表
export const getTopicList = async () => {
  try {
    const text = await fetchXMLtoJSON('../xml/topics.xml');
    const res = dealTopics(text);
    return res.map(item => {
      const pic = item.pic || '';
      return {
        id: item.id || '',
        pic: pic,
        image: pic.replace(/^\/st/, '..'),
        en_name: item.en_name || '',
        ch_long_name: item.ch_long_name || '',
        cn_long_name: item.cn_long_name || ''
      }
    });
  } catch (e) {
    return []
  }
}

const global_abilities = {
  "2": "动态诊断练习，冰果英语您对症下药",
  "5": "轻松听，多听听增强语感",
  "6": "全文听写，练基本功",
  "13": "口译，在对话情景中当英文翻译",
  "15": "跟我读，说从模仿开始",
  "16": "人机对话，根据提示在情景中学对话",
  "17": "口头作文，说上一段，让冰果英语给您专家意见",
  "21": "动态诊断练习，冰果英语为您对症下药",
  "29": "轻松读，多读才能积累语汇，增强语感",
  "81": "写写练练提高英语思维能力，冰果智能评测系统立刻评判您的写作能力",
  "2051": "句子翻译，练练翻译提高基本功",
  "2053": "句子翻译，练练翻译提高基本功",
  "2054": "句子翻译，练练翻译提高基本功",
}
const handleGetArticles = (text) => {
  const obj = {}
  const online = text.querySelector('online');
  obj.online = online ? online.textContent === 'true' : '';

  const valid = text.querySelector('valid');
  obj.valid = valid ? valid.textContent === 'true' : '';

  const ip_valid = text.querySelector('ip_valid');
  obj.ip_valid = ip_valid ? ip_valid.textContent === 'true' : '';

  const school = text.querySelector('school');
  obj.school = school ? school.textContent : '';

  const ip_string = text.querySelector('ip_string');
  obj.ip_string = ip_string ? ip_string.textContent : '';

  const todos = Array.from(text.querySelectorAll('todos todo'))

  obj.todos = todos.map(todo => {
    const todoObj = {};
    const items = []
    Array.from(todo.children).forEach((child, index) => {

      if (child.tagName === 'item') {
        const keys = Array.from(child.children)
        const _subchild = {}
        keys?.forEach(ii => {
          _subchild[ii.tagName] = ii?.textContent === 'true' ? true : ii?.textContent === 'false' ? false : ii.textContent
        });
        items.push(_subchild)
      } else {
        if (child.tagName === 'skill_type') {
          todoObj[child.tagName] = global_abilities[child.textContent]
        } else {
          todoObj[child.tagName] = child.textContent === 'true' ? true : child.textContent === 'false' ? false : child.textContent;
        }
      }
    });
    todoObj.items = items
    return todoObj;
  });

  return obj
}


export const getArticles = async (data) => {
  try {
    let params = new URLSearchParams(data).toString();
    const api = `../ability/mock/getNewAbilityMaterialsList.xml?${params}`;
    // const api = `/lib/mybingo/getNewAbilityMaterialsList.xml?${params}`;
    const res = await fetchXMLtoJSON(api);
    const articles = handleGetArticles(res);
    return articles
  } catch (e) {
    return undefined
  }
}