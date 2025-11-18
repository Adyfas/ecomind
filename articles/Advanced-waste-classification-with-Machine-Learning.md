---
title: "Advanced waste classification with Machine Learning"
excerpt: "Improving waste classification techniques"
author: "Daniel García Solla"
date: "Jan 10 2022"
readTime: "5"
tags: ["sustainability", "eco-friendly", "beginner-guide"]
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdz-Ezawd2eb2iGUs95k3fBPVMCP6rV4apTw&s"
authorImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1760719561663/e333c7bd-3d7e-42c2-a2d3-100f6abb5b5d.jpeg?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&format=webp"
---

# Introduction

The accumulation of non-recyclable waste on landfills all around the world and the huge amount of time that most of its materials take to biodegrade can affect in a significant manner our lifestyle in the near future if we, as a society, don't take action to prevent this from happening. Moreover, among the most notorious risks for humans, waste accumulation can enhance the disease spread via vectors such as flies, mosquitoes, and many more insects. Also, in addition to the ruin of the beauty of natural habitats, deforestation, and terrain occupation to provide enough space to landfills, soil and water can be susceptible to be polluted due to the toxic chemicals located in improperly treated materials. At the same time, that pollution can alter the food chain, which inevitably leads to more diseases and health issues for humans and the natural ecosystems worldwide.

There are mainly three reasons why waste accumulation is becoming an increasingly severe problem during the last 50 years. The first one is the absence of recyclable items available on the market, even though companies have been developing more sustainable and ecological products for a long time. The second reason is another of the most popular problems present nowadays, denoted as overpopulation. The fact of having to supply a large number of people with resources of all kinds supposes a very complex logistic challenge when dealing with trash generation, so there is an increase in the percentage of products that could be recycled but, in contrast, end in a landfill or even the ocean, affecting the lives of thousands of marine species. Finally, the third reason consists of the lack of involvement that we show as a society over these kinds of problems such as climate change.

To show the waste accumulation problem in terms of data, it's essential to know that the world population produces between 7 and 9 billion tons of waste every year, of which 70% is mistreated, ending in landfills with the risk of polluting natural environments and causing new threats for human health like ocean microplastics. This data refers to the total amount of used, unwanted, and discarded objects that humankind creates. However, there is a distinction between the total waste produced and the so-called Municipal Solid Waste (MSW), which only includes garbage generated in urban centers or their areas of influence. Concerning the amount of MSW with respect to the rest of the waste, approximately 2 billion tons of urban garbage is produced yearly, with around 33% of that not adequately managed. It means that each person generates from 0.1 to 4.5 kilograms of waste every day, with an average of 0.7kg. In addition, it's expected that the MSW will increase to 3.4 billion tons by the year 2050 due to the rapidly growing global population and the need for the intensive use of natural resources for the development of industry and the sustaining of our civilization.

Ideally, a fully implemented circular economy model would essentially be an excellent solution for the accumulation problem, besides the climate change and even supply crisis in some places of our world. That's because its three principles (eliminating waste and pollution, circulating products and materials, and regenerating nature) lead towards an effective way of managing natural resources that sometimes we don't correctly value. Nevertheless, it isn't easy to carry out such a complex plan in a complete manner due mainly to technology, engineering, and logistic limitations.

# Machine Learning in environment care

Despite these limitations, some emerging new state-of-the-art technologies are starting to change how we see and face these problems. One of the most notorious nowadays is Machine Learning, a branch of Artificial Intelligence that makes it possible for machines to learn specific and complex tasks like classification, prediction, decision making, content generation, etc., by using large amounts of data in combination with advanced learning algorithms inspired on the way we humans learn. Automating such tasks using machine learning can sometimes be extremely useful for humans due to its scalability and performance.

Regarding its relationship with sustainability and circular economy implementation, machine learning has the potential to automate a wide variety of tasks. From data trend predictions that improve the quality of the air we breathe and finding patterns on data collected to measure global warming over time, identifying waste in natural environments, or even classifying between several types of garbage materials to boost the performance of waste treatment plants. So the proper identification and differentiation of recyclable items from the rest of the litter can also be a significant advance towards a sustainable circular economy model. However, machine learning is now present in more processes related to environmental care than we think. For example, a correct energy or product demand prediction made by a model can avoid the waste of natural resources. Also, advanced enough models can even discover new materials by working with chemical structures, improving the efficiency and recyclability of everyday products.

# Objective

The goal of this article is to contribute to the development and improvement of machine learning techniques focused on solving environmental issues like the above-mentioned (waste accumulation, global warming, pollution, etc.) by creating a model capable of sorting between nine different types of waste depending on the fabrication materials, and thus its recyclability. Furthermore, it will be subject to experimentation by professionals and subject matter experts since its open-source. That experimentation is key when improving the performance of models in the field of machine learning, along with the data gathering and processing techniques used in the process.

# How does it work?

will need a model architecture denominated as Convolutional Neural Network since our dataset will be composed mainly of labeled images, meaning that each image has a corresponding label that indicates the correct prediction (type of waste material) the model will have to provide as output. At the same time, the model will also need a fully-connected network after the convolutional module to transform an arbitrary response given by it to a set of values with a particular structure that will allow us to determine the class predicted by the model.

The aim of using a Convolutional Network to process an image resides in its ability to extract certain patterns or features from images with an invariance in position, rotation, and scale. To understand the power of these properties when detecting features in images, let's consider an example.

Press enter or click to view image in full size
