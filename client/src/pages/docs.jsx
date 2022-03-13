function Docs() {
  return (
    <div className="docs mt-5 px-8 w-3/5 m-auto">
      <h1 className="font-bold text-center text-2xl">中国知识产权法律法规汉英平行语料库</h1>
      <h3 className="text-center text-gray-500 text-sm mt-1">(Parallel Corpus of Chinese IP Laws and Regulations)</h3>
      <main>
        <header>I 简介:</header>
        <section>
          中国知识产权法律法规汉英平行语料库选用官方最新修订的《中国知识产权法律法规汉英平行语料库》、
          《中华人民共和国专利法》、《集成电路布图设计保护条例》及其英文版（相关网站为：
          <a href="http://www.npc.gov.cn" className='text-blue-600'>www.npc.gov.cn</a>与<a className='text-blue-600' href="http://www.cnipa.gov.cn">www.cnipa.gov.cn</a>）。
        </section>
        <section>根据原文与译文的关系，本语料库采用了句与句之间的“一对一”处理，能够较好地匹配汉英语句，提供相应的翻译双语资源。</section>
        <section>在供应提供语料的同时，本网站也对汉英翻译的概念功能显化分析结果相应展示。根据韩礼德的系统功能语法理论，胡开宝等学者将显化分为概念功能信息显化（explicitation of ideational function information）、人际功能信息显化（explicitation of interpersonal function information）和语篇功能信息显化（explicitation of textual function information）三大类。</section>
        <section>概念功能信息显化是指译者使源语文本中隐含的概念功能信息清楚地表达在译文中，主要为：</section>
        <ul>
          <li>
            1) 文化信息显化（explicitation of cultural information），即译者采用注释或解释性翻译等方法，来克服因社会文化差异所带来的信息理解性困难；
          </li>
          <li>
            2) 概念意义显化（explicitation of conceptual meaning），指译者会直译源语文本中模糊、抽象的词汇在具体语境中的精确含义，或者选择译入语中最恰当的对应词汇表达；
          </li>
          <li>
            3) 语用含义显化（explicitation of pragmatic meaning），即译者倾向于直接译出源语文本中一些使用了修辞手法或表达较为含蓄的语句；
          </li>
          <li>
            4) 动作发出者和承受者的显化（explicitation of actors and receivers），即译者会在语句中的主语或宾语成分上补充源语文本中隐含的动作发出者或承受者。
          </li>
        </ul>
        <section>本网站可以为中国知识产权文本翻译实现“忠实性”和“可读性”的统一提供一定的参考，使得中国法律的英语表达更加贴合国际实情，为构建中国对外话语体系与开展改革开放战略尽绵薄之力。</section>
      </main>
      <main>
        <header>II 使用说明:</header>
        <p>本网站主要分为四个部分：</p>
        <ul>
          <li>
            1. 语料检索：在检索框内输入一个或多个检索词（用空格符隔开），即可中文，亦可英文；随后点击“提交”，即可显示出含有检索词的对应双语例句。
          </li>
          <li>
            2. 显化实例：根据显化分类，点击相应标题的按钮，即可查看相应分类的PDF文件，研习具体的显化实例。
          </li>
          <li>
            3. 互动讨论：网站访问者可在互动讨论框中发表各自观点，形成自由学术研讨。
          </li>
          <li>
            4. 简介说明
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Docs;