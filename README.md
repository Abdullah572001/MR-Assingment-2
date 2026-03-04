<h2> প্রশ্নগুলোর উত্তর
</h2>

<ul>
    <li>Q : What is JSX, and why is it used?
    </li>

    Ans. JSX এর পূর্ণরুপ হলো javascript XML ।  এটি javascript এর এমন একটি file যার মধ্যে html এর মতো কোড লেখা যায়।

    এটি ব্যবহার করার প্রধান কারন হলো এর সবগুলো কোড একটি <div> এর ভিতর থাকে, এর ভিতর {} দিয়ে সহজেই javascript এর লজিক লেখা যায়,এর কোড react সহজেই বুঝতে পারে এবং ব্রাউজারের বুঝার মত করে ফেলে।

</ul>

<ul>
    <li>Q : What is the difference between State and Props?
    </li>

    Ans. Props হল এমন এক ধরনের data যা একটি প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়। এটি অনেকটা function এর পেরামিটারের মতো কাজ করে। এটি প্যারেন্ট থেকে চাইল্ডে পাঠানো যায়, চাইল্ড থেকে পেরেন্টে পাঠানো যায় না।

    আর state হলো কম্পোনেন্টের ভিতরে তৈরি হয় এবং কম্পোনেন্টের কোন একটি ডাটা store করে রাখে। এবং তা পরিবর্তন হলে অর্থাৎ state পরিবর্তন হলে react পুরো কম্পোনেন্টকে re-render করে।

</ul>

<ul>
    <li>Q : What is the useState hook, and how does it work?
    </li>

    Ans. useState() হলো react এর, এটি এমন একটি function যা jsx  কম্পোনেন্টের ভিতর ব্যবহার করা যায়, এটি কম্পোনেন্টের একটি value স্টোর করে রাখে এবং value টি পরিবর্তন হলে নতুন মান সেট কম্পোনেন্টটি re-render করে।

    useState() কে কল করে এর থেকে একটি array তে দুটি মান destructor করতে হয়।প্রথমটি state আর দ্বিতীয়টি setState।state কম্পোনেন্টের মান থাকে। useState() কল করে পেরামিটার দিলে সেটি state এর নতুন মান হয়। আর state পরিবর্তন হওয়ার কারনে react কম্পোনেন্টিকে re-render করে।

</ul>

<ul>
    <li>Q : How can you share state between components in React?
    </li>

    Ans. state কে অন্য কম্পোনেন্টে শেয়ার করার জন্য প্রথমে common jsx file সাধারণত app.jsx এ state ডিকলার করবো।অতঃপর সেটিকে props আকারে চাইল্ড কম্পোনেন্টে পাঠাবো। এটিকে lifting state up বলে। এভাবে একাধিক চাইল্ডেও state  শেয়ার করা যায়।

</ul>

<ul>
    <li>Q : How is event handling done in React?
    </li>

    Ans. React এ evant handling onClick() এর মাধ্যমে করা হয়। html থেকে পার্থক্য শুধু এতটুকু যে C টা বড়হাতের লিখতে হবে। আর onClick() এ function দেওয়ার সময় () দেওয়া যাবে না, না হয় evant চালু হওয়ার আগেই function call  হয়ে যাবে। সে জন্য যদি পেরামিটার দিতে হয় তাহলে arrow function দিয়ে অথবা অন্য একটি function call করে সেখানে পেরামিটার দিতে হবে।

</ul>
