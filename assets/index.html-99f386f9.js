import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h1 id="js手写实现" tabindex="-1"><a class="header-anchor" href="#js手写实现" aria-hidden="true">#</a> js手写实现</h1><h2 id="call实现" tabindex="-1"><a class="header-anchor" href="#call实现" aria-hidden="true">#</a> call实现</h2><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ol><li>改变函数的this指向</li><li>会让函数立即执行</li><li>函数this指向call第一个参数，剩余参数为函数传递的参数</li></ol><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> context <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>
    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;arguments[&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;context.fn(&#39;</span> <span class="token operator">+</span> args <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","index.html.vue"]]);export{u as default};